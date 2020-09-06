var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        }
    },
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599382969",
        "controls": {
            "overlays": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "pan": true,
            "compass": true,
            "coordsBox": true
        }
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "defaultZoom": 1,
            "maxZoom": 8,
            "world": "world",
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "path": "day",
            "isOverlay": false,
            "poititle": "Markers",
            "imgextension": "png",
            "north_direction": 0,
            "name": "Daytime Render",
            "zoomLevels": 8,
            "base": "",
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "last_rendertime": 1599382579,
            "showlocationmarker": true
        }
    ]
};
