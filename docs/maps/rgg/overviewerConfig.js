var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "path": "day",
            "showlocationmarker": true,
            "poititle": "Markers",
            "defaultZoom": 1,
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "isOverlay": false,
            "last_rendertime": 1594475780,
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "world": "world",
            "base": ""
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1594476714",
        "controls": {
            "mapType": true,
            "compass": true,
            "overlays": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "pan": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
