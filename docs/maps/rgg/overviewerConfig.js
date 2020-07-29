var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "maxZoom": 8,
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "north_direction": 0,
            "minZoom": 0,
            "last_rendertime": 1596012979,
            "spawn": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "imgextension": "png",
            "defaultZoom": 1,
            "path": "day",
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "name": "Daytime Render",
            "zoomLevels": 8
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "zoom": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true
        },
        "cacheTag": "1596013364",
        "debug": true
    }
};
