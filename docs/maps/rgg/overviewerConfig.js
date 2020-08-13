var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "world": "world",
            "zoomLevels": 8,
            "last_rendertime": 1597287379,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "showlocationmarker": true,
            "minZoom": 0,
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "isOverlay": false,
            "name": "Daytime Render",
            "maxZoom": 8,
            "imgextension": "png",
            "poititle": "Markers",
            "north_direction": 0
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "spawn": true,
            "overlays": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597287761"
    }
};
