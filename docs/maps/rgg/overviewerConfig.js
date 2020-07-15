var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "tileSize": 384
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "defaultZoom": 1,
            "path": "day",
            "maxZoom": 8,
            "showlocationmarker": true,
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "minZoom": 0,
            "imgextension": "png",
            "last_rendertime": 1594832179,
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "isOverlay": false,
            "world": "world",
            "base": ""
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "overlays": true,
            "compass": true,
            "mapType": true
        },
        "cacheTag": "1594832560",
        "debug": true,
        "north_direction": "lower-left"
    }
};
