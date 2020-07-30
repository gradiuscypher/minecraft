var overviewerConfig = {
    "CONST": {
        "image": {
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "imgextension": "png",
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
            "isOverlay": false,
            "poititle": "Markers",
            "defaultZoom": 1,
            "base": "",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "name": "Daytime Render",
            "path": "day",
            "showlocationmarker": true,
            "world": "world",
            "zoomLevels": 8,
            "maxZoom": 8,
            "minZoom": 0,
            "last_rendertime": 1596120979
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1596121363",
        "controls": {
            "pan": true,
            "compass": true,
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "coordsBox": true,
            "overlays": true
        },
        "north_direction": "lower-left"
    }
};
