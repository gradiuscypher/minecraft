var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png"
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "zoomLevels": 8,
            "base": "",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "last_rendertime": 1597510579,
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "path": "day",
            "minZoom": 0,
            "defaultZoom": 1,
            "isOverlay": false,
            "poititle": "Markers",
            "imgextension": "png"
        }
    ],
    "map": {
        "cacheTag": "1597510965",
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "overlays": true
        },
        "debug": true
    }
};
