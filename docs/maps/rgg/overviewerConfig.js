var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "north_direction": 0,
            "isOverlay": false,
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "base": "",
            "minZoom": 0,
            "name": "Daytime Render",
            "last_rendertime": 1598392579,
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "imgextension": "png",
            "path": "day",
            "maxZoom": 8,
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "mapType": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "pan": true,
            "coordsBox": true
        },
        "cacheTag": "1598392968"
    }
};
