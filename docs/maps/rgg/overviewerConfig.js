var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "maxZoom": 8,
            "name": "Daytime Render",
            "world": "world",
            "isOverlay": false,
            "imgextension": "png",
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1597103779,
            "base": "",
            "showlocationmarker": true,
            "zoomLevels": 8,
            "minZoom": 0,
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "path": "day"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "compass": true,
            "mapType": true,
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true
        },
        "debug": true,
        "cacheTag": "1597104164",
        "north_direction": "lower-left"
    }
};
