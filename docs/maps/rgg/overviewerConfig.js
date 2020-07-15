var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "showlocationmarker": true,
            "base": "",
            "world": "world",
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "north_direction": 0,
            "path": "day",
            "maxZoom": 8,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "zoomLevels": 8,
            "last_rendertime": 1594796179,
            "isOverlay": false,
            "imgextension": "png"
        }
    ],
    "map": {
        "controls": {
            "pan": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "zoom": true,
            "compass": true
        },
        "cacheTag": "1594797517",
        "debug": true,
        "north_direction": "lower-left"
    }
};
